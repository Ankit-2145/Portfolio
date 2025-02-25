"use client";

import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name (at least 2 characters)." }),
  email: z.string().email({
    message: "Enter a valid email address (e.g., name@example.com).",
  }),
  subject: z.string().optional(),
  message: z.string().min(10, {
    message: "Your message should be at least 10 characters long.",
  }),
  budget: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      budget: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "6704c404-c1f4-4b31-853c-1075203c941f");
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your message has been sent successfully!");
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
    setIsSubmitting(false);
  }

  return (
    <div className="max-w-xl mx-auto text-left bg-card p-6 rounded-lg shadow-lg font-OpenSans mt-16 lg:mt-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Subject</SelectLabel>
                        <SelectItem value="freelance project">
                          Freelance Project
                        </SelectItem>
                        <SelectItem value="collaboration/Partnership">
                          Collaboration / Partnership
                        </SelectItem>
                        <SelectItem value="general inquiry">
                          General Inquiry
                        </SelectItem>
                        <SelectItem value="UI/UX Design Consultation">
                          UI/UX Design Consultation
                        </SelectItem>
                        <SelectItem value="Frontend Development Inquiry">
                          Frontend Development Inquiry
                        </SelectItem>
                        <SelectItem value="Full-Stack Development Inquiry">
                          Full-Stack Development Inquiry
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Budget</SelectLabel>
                        <SelectItem value="Less than $500">
                          Less than $500
                        </SelectItem>
                        <SelectItem value="$500 - $1,000">
                          $500 - $1,000
                        </SelectItem>
                        <SelectItem value="$1,000 - $3,000">
                          $1,000 - $3,000
                        </SelectItem>
                        <SelectItem value="$3,000 - $5,000">
                          $3,000 - $5,000
                        </SelectItem>
                        <SelectItem value="$5,000+">$5,000+</SelectItem>
                        <SelectItem value="Not Sure Yet">
                          Not Sure Yet
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
