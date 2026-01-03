import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
} from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setLoading(false);
    setOpen(false);
    toast.success("Message sent successfully! We'll be in touch.");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white text-[#1A3C34]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Partner With Us</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]/70">First Name</label>
              <Input className="bg-[#F9FAFB]" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]/70">Last Name</label>
              <Input className="bg-[#F9FAFB]" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]/70">Email</label>
            <Input required type="email" className="bg-[#F9FAFB]" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]/70">Topic</label>
            <Select>
              <SelectTrigger className="bg-[#F9FAFB]">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="land">Land Partnership</SelectItem>
                <SelectItem value="farming">Contract Farming</SelectItem>
                <SelectItem value="investment">Investment</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A3C34]/70">Message</label>
            <Textarea required placeholder="Tell us more..." className="bg-[#F9FAFB] min-h-[100px]" />
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#1A3C34] hover:bg-[#142f29] text-white rounded-full h-12 font-medium"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
              <>Send Message <ArrowRight className="ml-2 w-4 h-4" /></>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
