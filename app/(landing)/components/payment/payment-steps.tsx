import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import Button from "../ui/button";
import { FiCheckCircle } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";

const PaymentSteps = () => {
  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-5">
        <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
          <li>
            Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred
            bank account listed under 'Payment Options' (BCA, Mandiri, or BRI).
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt or</b> a
            screenshot of the transfer confirmation. This will be needed for the
            next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the{" "}
            <b>'Upload Receipt & Confirm'</b> button below to validate your
            transaction.
          </li>
        </ol>
        <FileUpload />
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">{priceFormatter(1035000)}</div>
        </div>
        <Button variant="dark" className="w-full mt-4">
          <FiCheckCircle />
          Upload Receipt & Confirm
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;
