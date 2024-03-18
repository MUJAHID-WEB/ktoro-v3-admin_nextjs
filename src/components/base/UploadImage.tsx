import { ChangeEventHandler } from "react";

interface Props {
    handleUploadImage?: ChangeEventHandler<HTMLInputElement>;
}

const UploadImage = ({ handleUploadImage }: Props) => {
    return (
        <div className="w-[181px] h-[100px] rounded-lg ">
            <label htmlFor="avatar">
                <div className="h-full rounded-lg relative cursor-pointer border-dashed border-2 flex flex-col justify-center items-center gap-2">
                    <input
                        type="file"
                        id="avatar"
                        accept="iamges/*"
                        className="hidden"
                        onChange={handleUploadImage}
                    />
                    <div className="font-normal flex justify-center items-center rounded text-xs text-[#8C9196] h-6 w-16 bg-ash-400">
                        Add File
                    </div>
                    <p className="font-normal text-xs text-ash-600">
                        Accepts .gif, .jpg, and .png
                    </p>
                </div>
            </label>
        </div>
    );
};

export default UploadImage;
