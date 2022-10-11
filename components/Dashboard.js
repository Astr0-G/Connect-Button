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
        <div className="absolute bottom-5 right-5 items-center space-y-2">
            <div className="  grid grid-cols-2 place-content-center h-48 caret-gray-700">
                <textarea
                    className="border-2 border-rounded border-black"
                    placeholder="What,s your maind"
                    cols="50"
                    rows="10"
                ></textarea>{" "}
                <br />
            </div>
            <div className="border-white space-x-6">
                {!image ? (
                    <img src={createObjectURL} />
                ) : (
                    <img src={createObjectURL} width="300" height="300" />
                )}
                <h4 className={styles.button}>
                    <input type="file" id="upload" hidden onClick={uploadToClient} />
                    <label for="upload">Choose file</label>
                </h4>
                <button className={styles.button} type="submit" onClick={uploadToServer}>
                    Send to server
                </button>
            </div>
        </div>
    )
}
