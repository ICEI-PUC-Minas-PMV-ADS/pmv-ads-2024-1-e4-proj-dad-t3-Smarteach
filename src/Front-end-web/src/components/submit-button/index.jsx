import { Button } from "@/components/ui/button";

export const SubmitButton = ({label, submitFunction, icon }) => {

    return (
        <Button className="mt-5 shadow-lg w-full bg-primaryColor gap-2" onClick={submitFunction}>
          {icon} {label}
        </Button>
    )
} 