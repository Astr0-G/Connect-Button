import Image from "next/image"
import { useState } from "react"
import styles from "../styles/Dashbaord.module.css"
import { ConnectButton } from "@rainbow-me/rainbowkit"
export default function Dashboard() {
    ///image
    const [image, setImage] = useState(null)
    const [createObjectURL, setCreateObjectURL] = useState(null)

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0]

            setImage(i)
            console.log(setImage)
            setCreateObjectURL(URL.createObjectURL(i))
        }
    }

    const uploadToServer = async (event) => {
        const body = new FormData()
        body.append("file", image)
        const response = await fetch("/api/file", {
            method: "POST",
            body,
        })
    }
    ///image
    return (
        <div className="absolute bottom-5 right-5 items-center space-y-8">
            <div className=" flex items-center place-content-center h-48 caret-gray-700">
                <textarea
                    className="border-2 border-rounded rounded-lg border-solid border-black"
                    placeholder="What,s your maind"
                    cols="50"
                    rows="10"
                ></textarea>{" "}
                <br />
                {!image ? (
                    <img src={createObjectURL} />
                ) : (
                    <img
                        className="border-2 border-rounded rounded-lg border-solid border-black"
                        src={createObjectURL}
                        width="244"
                        height="244"
                    />
                )}
            </div>
            <div className="border-white space-x-20">
                <h4 className={styles.button}>
                    <input type="file" id="upload" hidden onChange={uploadToClient} />
                    <label for="upload">Choose file</label>
                </h4>
                <button className={styles.button} type="submit" onClick={uploadToServer}>
                    Send to server
                </button>
            </div>
        </div>
    )
}
