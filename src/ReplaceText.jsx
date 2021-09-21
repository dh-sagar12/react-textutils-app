import React, { useState } from 'react'

const ReplaceText = (props) => {

    const [word, setWord] = useState({
        find: "",
        replace: ""
    })

    let handleText = (event) => {
        let { value, name } = event.target
        setWord((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    let handleReplaceText = () => {
        console.log(props);
        props.ReplaceTextFunc(word)
        setWord({
            find: "",
            replace: ""
        }
        )
    }

    let closeModal = () => {
        setWord({
            find: "",
            replace: ""
        })
    }
    return (
        <>
            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Replace Text
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={"modal-content p-3 "+props.darkMode}>
                        <label className="form-label">Find Text</label>
                        <input className={"form-control form-control-lg "+props.darkMode} name='find' value={word.find} type="text" aria-label=".form-control-lg example" onChange={handleText} />
                        <label className="form-label">Replace</label>
                        <input className={"form-control form-control-lg "+props.darkMode} name='replace' value={word.replace} onChange={handleText} type="text" aria-label=".form-control-lg example" />

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleReplaceText}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ReplaceText
