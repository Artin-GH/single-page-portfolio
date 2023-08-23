import { FC, ReactNode, Fragment } from "react";
import Image from "next/image";

const FormControl: FC<{
  invalidFormat?: boolean;
  isActive?: boolean;
  children: ReactNode;
}> = (props) => {
  return (
    <div
      className={`form-control ${props.isActive ? "active" : ""} ${
        props.invalidFormat ? "form-control-invalid-format" : ""
      }`}
    >
      {props.children}
      {props.invalidFormat ? (
        <Fragment>
          <div className="form-control-invalid-format-error">
            Sorry, invalid format here
          </div>
          <div className="form-control-invalid-format-icon">
            <Image
              priority
              src="/images/circle-exclamation.svg"
              width={24}
              height={24}
              alt="exclamation"
            />
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default FormControl;
