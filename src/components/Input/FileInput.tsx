"use client";
import React, { forwardRef, useEffect, useId, useRef, useState } from "react";
import { variants, sizes } from "./TextInput";
import Button from "../Button/Button";
import Modal from "../Overlay/Modal";
import Badge from "../DataDisplay/Badge";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: keyof typeof variants;
  onFilesSelected?: React.Dispatch<React.SetStateAction<File[] | null>>;
  inputSize?: keyof typeof sizes;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  buttonText?: string;
  droppable?: boolean;
  dropModal?: boolean;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className = "",
      label,
      variant = "default",
      inputSize = "md",
      fullWidth = false,
      disabled = false,
      error = false,
      errorMessage,
      id,
      accept = "/*",
      multiple,
      droppable,
      onFilesSelected,
      required = false,
      buttonText,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<Array<File>>([]);
    const [modal, setModal] = useState(false);
    const [drag, setDrag] = useState(false);
    const state = disabled ? "disabled" : error ? "error" : "default";
    const baseClasses = `${variants[variant][state]} ${sizes[inputSize]} ${
      fullWidth ? "w-full" : ""
    } ${className}`;
    const generatedId = useId();
    const inputId = id || generatedId;
    const labelColor = error
      ? "text-red-600"
      : disabled
      ? "text-muted-foreground"
      : "text-primary";
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const droppedFiles = event.dataTransfer.files;
      if (droppedFiles.length > 0) {
        const newFiles = Array.from(droppedFiles);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (selectedFiles && selectedFiles.length > 0) {
        const newFiles = Array.from(selectedFiles);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      }
    };
    const handleRemoveFile = (index: number) => {
      setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    useEffect(() => {
      if (onFilesSelected) {
        onFilesSelected(files);
      }
    }, [files, onFilesSelected]);
    useEffect(() => {
      if (droppable) {
        document.body.ondragenter = () => {
          setModal(true);
        };
      }
    }, [droppable]);
    return (
      <>
        {droppable && modal && (
          <Modal
            className=" flex flex-col"
            open={modal}
            showCloseButton
            header={label ?? "drag and drop files"}
            onClose={() => {
              setModal(false);
            }}
          >
            <div
              onDrop={(e) => {
                setDrag(false);
                setModal(false);
                handleDrop(e);
              }}
              className={`text-center  border-2 border-dotted rounded-xl py-10 ${
                drag ? "bg-secondary" : "bg-background"
              }`}
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDragEnter={() => {
                setDrag(true);
              }}
              onDragLeave={() => {
                setDrag(false);
              }}
            >
              <p>Drop here...</p>
            </div>
          </Modal>
        )}

        <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : ""}`}>
          {label && (
            <label htmlFor={inputId} className={`${labelColor}`}>
              {label}
            </label>
          )}
          <div
            className={`text-sm flex flex-row flex-wrap items-center gap-1.5 font-medium  transition-all duration-200 ${baseClasses}`}
          >
            <Button
              size="sm"
              onClick={() => {
                inputRef.current?.showPicker();
              }}
            >
              {buttonText ?? label}
            </Button>

            {files.length > 0 && (
              <>
                {files.map((file, index) => (
                  <Badge variant="info" className="  flex-row " key={index}>
                    <p>{file.name}</p>

                    <span
                      className={`cursor-pointer px-[6px] pt-0.5 rounded-full text-center  text-white  hover:opacity-70 transition text-sm font-bold`}
                      onClick={() => {
                        handleRemoveFile(index);
                      }}
                    >
                      ×
                    </span>
                  </Badge>
                ))}
              </>
            )}
          </div>

          <input
            multiple={multiple}
            required={required}
            onChange={handleFileChange}
            accept={accept}
            type="file"
            ref={ref ?? inputRef}
            id={inputId}
            disabled={disabled}
            className={"hidden"}
            {...props}
          />

          {error && errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}
        </div>
      </>
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;
