"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiPost } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const legalInfoSchema = z.object({
  abn: z.string().optional(),
});

type LegalInfoFormValues = z.infer<typeof legalInfoSchema>;

interface LegalInfoFormProps {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: (checkout: any, abn: string) => void;
  onNextIsPaymentComplete: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export function LegalInfoForm({
  formData,
  updateFormData,
  onNext,
  onNextIsPaymentComplete,
  onBack,
  isSubmitting,
}: LegalInfoFormProps) {
  const [isReady, setIsReady] = useState(true); // No PaymentElement needed
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [isFailedToCreateSession, setIsFailedToCreateSession] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LegalInfoFormValues>({
    resolver: zodResolver(legalInfoSchema),
    defaultValues: {
      abn: formData.abn,
    },
  });

  const handleCheckout = async () => {
    try {
      const response: any = await apiPost("/stripe/create-checkout-session", {
        email: formData.email,
        plan: formData.plan,
        currency: formData.currency,
        recurring_interval: formData.recurring_interval,
        trial: formData.trial,
      });

      if (response.error) {
        if (response.error === "Conflict") {
          setIsPaymentComplete(true);
        } else {
          toast({
            variant: "destructive",
            title: "Failed",
            description: response.message || "Could not load secure form.",
          });
          setIsFailedToCreateSession(true);
        }
      }

      if (response.url) {
        // Redirect user to Stripe Checkout
        window.location.href = response.url;
      }
    } catch (e: any) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Error",
        description: e.message || "Something went wrong.",
      });
      setIsFailedToCreateSession(true);
    }
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    const abn = (event.target.abn?.value || "") as string;
    updateFormData({ abn });
    handleCheckout();
  };

  return (
    <div>
      {!isReady && (
        <div className="text-white text-sm mb-4 pt-20 flex flex-col items-center justify-center text-center gap-2">
          Initializing Secure Payment Form...
        </div>
      )}

      {isFailedToCreateSession && (
        <div className="text-red-400 text-sm mb-4 pt-20 flex flex-col items-center justify-center text-center gap-2">
          Failed To Initialize Secure Payment Form...
          <div className="flex justify-center gap-4 !mt-16">
            <button
              type="button"
              onClick={onBack}
              className="back-button"
              style={{ height: "2.75rem" }}
            >
              Go Back
            </button>
            <Link
              href="/"
              className="rounded-full bg-epiclinx-teal hover:bg-epiclinx-teal/80 text-black px-6 py-3 transition-all w-full sm:w-auto sm:self-end"
            >
              Start Over
            </Link>
          </div>
        </div>
      )}

      {isPaymentComplete && (
        <div className="text-xl mb-4 pt-20 flex flex-col items-center justify-center gap-2">
          <div>
            <p className="mb-10">Hey there! 👋</p>
            <p className="mb-10">
              Your card is already verified and authorized. ✅
            </p>
            <div className="flex justify-center gap-4 !mt-16">
              <button
                type="button"
                onClick={onBack}
                className="back-button"
                style={{ height: "2.75rem" }}
              >
                Go Back
              </button>
              <Button
                onClick={onNextIsPaymentComplete}
                className="rounded-full bg-epiclinx-teal hover:bg-epiclinx-teal/80 text-black px-6 py-3 transition-all w-full sm:w-auto sm:self-end"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleOnSubmit}>
        <div className="pt-7 space-y-2">
          <Label
            htmlFor="abn"
            className="text-gray-100 font-light text-xs flex items-center gap-1"
          >
            ABN (optional) <Info className="h-4 w-4 text-gray-400" />
          </Label>
          <Input
            id="abn"
            placeholder="Enter Your ABN"
            {...register("abn")}
            className="bg-transparent border-gray-400 text-white rounded-full"
          />
          {errors.abn && (
            <p className="text-red-500 text-xs mt-1">{errors.abn.message}</p>
          )}
        </div>

        <div className="flex justify-center gap-4 !mt-16">
          <button
            type="button"
            onClick={onBack}
            className="back-button"
            style={{ height: "2.75rem" }}
          >
            Back
          </button>
          <Button
            type="submit"
            className="rounded-full bg-epiclinx-teal hover:bg-epiclinx-teal/80 text-black px-6 py-3 transition-all w-full sm:w-auto sm:self-end"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Please Wait ..." : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}
