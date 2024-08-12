import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function contact() {
    return (
        <div>

            <div class="container my-5">
                <div class="row">
                   
                    <div class="col-md-6">
                        <h2>DROP US A LINE</h2>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name (required)</label>
                                <input type="text" class="form-control" id="name" required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Your Email (required)</label>
                                <input type="email" class="form-control" id="email" required/>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Your Phone Number</label>
                                <input type="text" class="form-control" id="phone"/>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Your Message</label>
                                <textarea class="form-control" id="message" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>


                    <div class="col-md-6">
                        <h2>CONTACT INFORMATION</h2>
                        <p>
                            We love to hear from you on our customer service, merchandise, website or any
                            topics you want to share with us. Your comments and suggestions will be appreciated.
                            Please complete the form below.
                        </p>
                        <p><i class="bi bi-telephone"></i> 012-345 6789</p>
                        <p><i class="bi bi-envelope"></i> <a href="mailto:online@gmail.com.my">itbuddy@gmail.com.my</a></p>
                        <p><i class="bi bi-clock"></i> Everyday 10:00–18:30</p>
                        <p><i class="bi bi-envelope"></i> For marketing related inquiries, please email to <a href="mailto:itbuddymarketing@gmail.com.my">itbuddymarketing@gmail.com.my</a></p>
                        <p><i class="bi bi-envelope"></i> For bundle purchase, please email to <a href="mailto:itbuddysales@gmail.com.my">itbuddysales@gmail.com.my</a> or WhatsApp to 012-345 6789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact