/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Style } from "./style.js";

const FormTextInput = (props) => {
  const {
    starProps,
    icon,
    label,
    type,
    placeholder,
    Value,
    onChangeText,
    Validate,
    CustomErrorLine,
    Hint,
    multiline,
    mainContainerStyle,
    inputStyle,
    labelTextStyle,
    customErrorLineStyle,
    labelContainerStyle,
    placeholderStyle,
    inputContainerStyle,
    editable,
    passwordVisibleIcon,
    customPasswordValidation,
    customEmailValidation,
    customWebsiteValidation,
    customPhoneValidation,
    inputName,
    passwordCustomErrorLine,
    ...input
  } = props;

  const [name, setName] = useState({
    value: Value ? Value : "",
    error: false,
    success: false,
  });

  const [error, setError] = useState("");
  const [toggleShowPassword, setToggleShowPassword] = useState(false);
  const [textType, setTextType] = useState(type);
  const [showTooltip, setShowToolTip] = useState(false);

  const emailCustomeLineError ="";
  const websiteCustomeLineError = ""
  const numberemptyCustomeLineError = ""
  const numberinvalidCustomLineError = ""
  const passwordinvalidCustomLineError = ""
  const nameCustomeLineError = ""
  const fieldCustomeLineError = ""
  
     


  const handleChangeText = (e) => {
    const data = e.target.value;
    if (Validate && editable) {
      if (type === "text") {
        const regexText = /^[A-Za-z]/;
        if (regexText.test(data)) {
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        } else {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "website") {
        const websiteRegex =
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
        const webTest = customWebsiteValidation
          ? customWebsiteValidation
          : websiteRegex;
        if (!webTest.test(String(data).toLowerCase())) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          setError("");
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "alpha") {
        
        // const aplhaRegex = /^[a-zA-Z0-9]/;
        const aplhaRegex = /.*/;
       
        if (aplhaRegex.test(data)) {

          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        } else {
          const value = {
            value: data,
            success: false,
          };

          onChangeText(value);
          setName(value);
        }
      } else if (type === "textarea") {
        if (data.length === 0) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "email") {
        const emailRe =
          // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          // /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9+_.-.-]+$/;
          /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i;
        const emailTest = customEmailValidation
          ? customEmailValidation
          : emailRe;
        if (!emailTest.test(String(data).toLowerCase())) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          setError("");
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "number") {
        if (data.length === 0) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "phone") {
        const phonenoRe =
          /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        // const phonenoRe = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
        const phoneNo = customPhoneValidation
          ? customPhoneValidation
          : phonenoRe;
        if (!phoneNo.test(data)) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          setError("");
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "password") {
        const password =
          /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&*+=]).*$/;
        const validationLogic = customPasswordValidation
          ? customPasswordValidation
          : password;
        if (!validationLogic.test(data)) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          setError("");
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setError("");
          setName(value);
        }
      }
    } else if (!Validate && editable) {
      setError("");
      const value = {
        value: data,
        error: true,
        success: true,
      };
      onChangeText(value);
      setName(value);
    }
  };

  const handleBlurText = (e) => {
    const data = e.target.value;
    if (Validate && editable) {
      const textRegex = /^[a-zA-Z]+$/;
      const textSRegex = /^[^-\s][a-zA-Z_\s-]+$/g;
      if (textType === "text") {
        if (!textRegex.test(data) && !textSRegex.test(data)) {
          // if (data.length === 0) {
          setError(CustomErrorLine ? CustomErrorLine : nameCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "alpha") {
        const aplhaRegex = /^[0-9a-zA-Z&\s]+$/;
        const textSRegex = /^[^-\s][a-zA-Z0-9_\s-]+$/g;
        if (!aplhaRegex.test(data) && !textSRegex.test(data)) {
          setError(CustomErrorLine ? CustomErrorLine : fieldCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "textarea") {
        const textSRegex = /^[^-\s][a-zA-Z0-9_\s-]+$/g;
        if (data.length === 0 && !textSRegex.test(data)) {
          setError(CustomErrorLine ? CustomErrorLine : fieldCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "email") {
        const textSRegex = /^[/s]+$/;
        const emailRe =
          // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9+_.-.-]+$/;
        const emailTest = customEmailValidation
          ? customEmailValidation
          : emailRe;
        if (
          !emailTest.test(String(data).toLowerCase()) &&
          !textSRegex.test(data) &&
          !textSRegex.test(data)
        ) {
          setError(CustomErrorLine ? CustomErrorLine : emailCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "website") {
        const textSRegex = /^[/s]+$/;
        const websiteRegex =
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
        const websiteTest = customWebsiteValidation
          ? customWebsiteValidation
          : websiteRegex;
        if (
          !websiteTest.test(String(data).toLowerCase()) &&
          !textSRegex.test(data) &&
          !textSRegex.test(data)
        ) {
          setError(CustomErrorLine ? CustomErrorLine : websiteCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "number") {
        const textSRegex = /^[/s]+$/;
        if (data.length === 0 && !textSRegex.test(data)) {
          setError(
            CustomErrorLine ? CustomErrorLine : numberemptyCustomeLineError
          );
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "phone") {
        const phonenoRe =
          /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        const textSRegex = /^[/s]+$/;
        const phoneNo = customPhoneValidation
          ? customPhoneValidation
          : phonenoRe;
        if (!phoneNo.test(data) && !textSRegex.test(data)) {
          setError(
            CustomErrorLine ? CustomErrorLine : numberinvalidCustomLineError
          );
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "tel") {
        const phonenoRe = /^\(\d{3}\)\s\d{3}-\d{4}$/;
        const textSRegex = /^[/s]+$/;
        const phoneNo = customPhoneValidation
          ? customPhoneValidation
          : phonenoRe;
        if (!phoneNo.test(data) && !textSRegex.test(data)) {
          setError(
            CustomErrorLine ? CustomErrorLine : numberinvalidCustomLineError
          );
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "password") {
        const textSRegex = /^[s]+$/;
        const password =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        const validationLogic = customPasswordValidation
          ? customPasswordValidation
          : password;
        if (!validationLogic.test(data)) {
          if (data.length === 0) {
            setError("");
          } else {
            setError(
              CustomErrorLine ? CustomErrorLine : passwordCustomErrorLine
            );
            const value = {
              ...name,
              error: true,
              success: false,
            };
            onChangeText(value);
          }
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      }
    } else if (!Validate && editable) {
      setError("");
      const value = {
        value: data,
        error: false,
        success: true,
      };
      onChangeText(value);
    }
  };

  const handleVisible = () => {
    setToggleShowPassword(!toggleShowPassword);
    setTextType("text");
    if (textType === "text") {
      setTextType("password");
    }
  };

  const handleClick = () => {
    setShowToolTip(!showTooltip);
  };

  return (
    <div
      style={Object.assign({}, Style.mainContainerStyle, mainContainerStyle)}
    >
      <div style={labelContainerStyle}>
        {label && starProps === true ? (
          <>
            <label style={{ ...Style.labelTextStyle, ...labelTextStyle }}>
              {label}
            </label>
            <span style={{ color: "red", marginLeft: "4px" }}>*</span>
          </>
        ) : (
          <label style={{ ...Style.labelTextStyle, ...labelTextStyle }}>
            {label}
          </label>
        )}
      </div>
      <div
        style={Object.assign(
          {},
          Style.inputContainerStyle,
          inputContainerStyle,
          error ? Style.inputContainerError : null
        )}
      >
        {icon ? icon : null}
        {multiline &&
        (type === "text" ||
          type === "alpha" ||
          type === "textarea" ||
          type === "website") ? (
          <textarea
            {...input}
            type={type}
            name={inputName}
            placeholder={placeholder}
            value={Value ? Value : name.value}
            onChange={handleChangeText}
            onBlur={handleBlurText}
            style={Object.assign(
              {},
              Style.textArea,
              error ? Style.textAreaError : null
            )}
            readOnly={!editable}
          ></textarea>
        ) : (
          <input
            {...input}
            inputMode={"numeric"}
            type={
              textType === "phone"
                ? "tel"
                : textType === "alpha"
                ? "text"
                : textType
            }
            placeholder={placeholder}
            value={Value ? Value : name.value}
            onChange={handleChangeText}
            onBlur={handleBlurText}
            onClick={handleClick}
            style={Object.assign(
              {},
              Style.inputStyle,
              inputStyle,
              placeholderStyle,
              editable ? null : Style.inputContainerDisabledStyle,
              error ? Style.inputError : null
            )}
            readOnly={!editable}
          />
        )}
        {type === "password" &&
          passwordVisibleIcon &&
          (textType === "password" ? (
            <div style={Style.pwIconContainerStyle}>
              <VisibilityOffIcon onClick={handleVisible} />
            </div>
          ) : (
            <div style={Style.pwIconContainerStyle}>
              <VisibilityIcon onClick={handleVisible} />
            </div>
          ))}
      </div>
      {Hint && <p style={Style.hint}>{Hint}</p>}
      {error && (
        <div className="clearFix">
          <div
            className="float-right"
            style={Object.assign(
              {},
              customErrorLineStyle
                ? customErrorLineStyle
                : Style.customErrorLineStyle
            )}
          >
            {error ? error : CustomErrorLine}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormTextInput;
