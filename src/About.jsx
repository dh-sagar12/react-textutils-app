import React from 'react'

const About = () => {
    return (
        <>
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">ABOUT TEXTUTILS</h2>
                <div>
                    <p>Text util provide you the functionality to change your text in wahtever you want to look like. you can do following things in this website</p>
                </div>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start border-end">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        </div>
                        <div>
                            <h2>Capitalize Text</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                             
                        </div>
                    </div>
                    <div className="col d-flex align-items-start border-end">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        </div>
                        <div>
                            <h2>Lowecase all Text</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                             
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        </div>
                        <div>
                            <h2>Replace Text </h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
