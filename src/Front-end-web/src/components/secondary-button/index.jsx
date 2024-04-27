import { Button } from "../ui/button";

const SecondaryButton = ({label}) => {

    return (
        <Button className="bg-primaryColor text-lg"> {label} </Button>
    )

}

export default SecondaryButton;