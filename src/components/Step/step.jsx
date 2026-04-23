import "./step.css"

function Stepsection() {
    return (
        <section className="easy-steps" id="easy-steps">
            <div className="easy-steps_head">
                <h2>
                    It's easy as three Step to create
                    your photobook
                </h2>

                <p>
                    With Pixory, you can easily transform your holiday photos into a
                    stunning photobook that captures the essence of your journey.
                    Simply upload your images, customize the layout, and add captions
                    to create a unique keepsake that will transport you back to those
                    special moments.
                </p>
            </div>

            <div className="esay-contain">

                <div className="esay_card">
                    <img
                        src="https://www.pixoryofficial.com/_ipx/h_240&f_webp/https://storage.googleapis.com/pbx-sw-digitalorca/media/eb/d2/cd/1730276945/ii1.png"
                        alt=""
                    />
                    <h2>1. CHOOSE YOUR TEMPLATE</h2>
                    <p>
                        Select your favorite album style and choose the perfect design
                        that matches your special memories beautifully.
                    </p>
                </div>

                <div className="esay_card">
                    <img
                        src="https://www.pixoryofficial.com/_ipx/h_240&f_webp/https://storage.googleapis.com/pbx-sw-digitalorca/media/83/f1/5f/1730276974/ii2.png"
                        alt=""
                    />
                    <h2>2. UPLOAD YOUR PHOTOS</h2>
                    <p>
                        Upload your best moments easily and securely so we can turn them
                        into a premium-quality memory book.
                    </p>
                </div>

                <div className="esay_card">
                    <img
                        src="https://www.pixoryofficial.com/_ipx/h_240&f_webp/https://storage.googleapis.com/pbx-sw-digitalorca/media/22/47/b2/1730277006/ii3.png"
                        alt=""
                    />
                    <h2>3. CUSTOMIZE YOUR BOOK</h2>
                    <p>
                        Add your personal touch with special notes, layouts, and custom
                        finishing for a truly unique album.
                    </p>
                </div>

            </div>

            <div className="step-dots">
                <span className="step-dot active"></span>
                <span className="step-dot"></span>
                <span className="step-dot"></span>
            </div>
        </section>
    );
}

export default Stepsection;