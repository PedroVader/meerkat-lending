import { Building, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmploymentStepProps {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

export default function EmploymentStep({ formData, handleInputChange }: EmploymentStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <Building className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Employment Information</h3>
        <p className="text-gray-600">We won't contact your employer</p>
      </div>
      <div className="max-w-xl mx-auto">
        <div>
          <Label htmlFor="employerName" className="text-base font-medium mb-2 block">
            Employer Name / Income Source
          </Label>
          <Input
            id="employerName"
            type="text"
            placeholder="Company Name"
            value={formData.employerName}
            onChange={(e) => handleInputChange('employerName', e.target.value)}
            className="text-base p-4"
          />
          <p className="text-sm text-emerald-600 text-center mt-3 flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" />
            We will NOT contact your employer
          </p>
        </div>
      </div>
    </div>
  );
}