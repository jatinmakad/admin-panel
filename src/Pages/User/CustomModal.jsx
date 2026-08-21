import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CustomModal({
  isOpen,
  title,
  fields = [],
  submitText = "Create",
  onClose,
  onSubmit,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [visiblePasswords, setVisiblePasswords] = useState({});

  if (!isOpen) return null;

  const togglePassword = (name) => {
    setVisiblePasswords((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const submitHandler = (data) => {
    onSubmit?.(data);
  };

  return (
    <div
      id="createModal"
      className="pop_bg"
      style={{ height: "100%", width: "100%", display: "block" }}
      onClick={() => onClose?.()}
    >
      <div className="pop_box pop_refer" onClick={(e) => e.stopPropagation()}>
        <a
          href="#"
          className="close_pop"
          onClick={(e) => {
            e.preventDefault();
            onClose?.();
          }}
        >
          close_pop
        </a>

        <h3 className="modal-header">{title}</h3>

        <form
          noValidate
          style={{ display: "flex", flexFlow: "column" }}
          onSubmit={handleSubmit(submitHandler)}
        >
          <div
            id="modalid"
            className="modal-content"
            // style={{ maxHeight: 400, overflowY: "scroll" }}
          >
            <ul className="half_box add-member-box">
              <li className="add_account_box">
                <dl>
                  {fields.map((field) => {
                    const isPassword = field.type === "password";
                    const isVisible = visiblePasswords[field.name];

                    return (
                      <div key={field.name} style={{ position: "relative" }}>
                        <dt>{field.label}</dt>
                        <dd>
                          <input
                            id={field.name}
                            type={isPassword && isVisible ? "text" : field.type}
                            maxLength={field.maxLength}
                            appinputrestriction={field.restriction}
                            placeholder="Enter"
                            {...register(field.name, {
                              required: field.required
                                ? `${field.label} is required`
                                : false,
                            })}
                          />
                          {field.required && (
                            <span className="must rg-mark">＊</span>
                          )}

                          {errors[field.name] && (
                            <span
                              id={`${field.name}ErrorText`}
                              className="error-text"
                            >
                              {errors[field.name].message}
                            </span>
                          )}

                          {isPassword && (
                            <i
                              aria-hidden="true"
                              className={`fa ${isVisible ? "fa-eye" : "fa-eye-slash"} fa-xs pass-eye`}
                              style={{
                                color: "#000",
                                top: 7,
                                left: "22.5rem",
                                position: "absolute",
                                opacity: 0.9,
                                cursor: "pointer",
                              }}
                              onClick={() => togglePassword(field.name)}
                            />
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </li>
            </ul>
          </div>

          <div className="modal-footer">
            <div style={{width:"100%"}} className="btn_box">
              <button type="submit" className="btn-send size-btn">
                {submitText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
