import React from 'react';

export default function Review() {
    return (
        <div className="testbox">
            <form action="/">
                <h1 className="review_heading">Website Feedback Form</h1>
                <p className="question">Is this the first time you have visited the website?</p>
                <div className="question-answer">
                    <label><input type="radio" value="none" name="visited" /> yes</label>
                    <label><input type="radio" value="none" name="visited" /> no</label>
                </div>
                <p className="question">Please choose your Teacher's name</p>
                <div className="select">
                    <select name="slct" id="slct">
                        <option>Computer Science Subjects</option>
                        <option value="1">Operating System</option>
                        <option value="2">Computer Networks</option>
                        <option value="3">Data Structure</option>
                        <option value="4">Algorithm</option>
                        <option value="5">C programming</option>
                        <option value="6">JAVA</option>
                    </select>
                </div>

                <p className="question">Please provide your awesome thoughts to improve or to appreciate the efforts of your teacher(Don't Use any vulgar language).</p>
                <textarea rows="5"></textarea>
                <p className="question">Please tell us how was your experience with your teacher.</p>
                <div className="question-answer">
                    <label><input type="radio" value="none" name="easy" /> Very good</label>
                    <label><input type="radio" value="none" name="easy" /> Good</label>
                    <label><input type="radio" value="none" name="easy" /> Average</label>
                    <label><input type="radio" value="none" name="easy" /> Normal</label>
                    <label><input type="radio" value="none" name="easy" /> Difficult</label>
                </div>
                <p className="question">What is your overall review about Teaching ways</p>
                <table>
                    <tr>
                        <th className="first-col"></th>
                        <th>Below Expectations</th>
                        <th>Meets Expectations</th>
                        <th>Exceeds Expectations</th>
                    </tr>
                    <tr>
                        <td className="first-col">Course Material</td>
                        <td><input type="radio" value="none" name="professional" /></td>
                        <td><input type="radio" value="none" name="professional" /></td>
                        <td><input type="radio" value="none" name="professional" /></td>
                    </tr>
                    <tr>
                        <td className="first-col">Subject Understanding</td>
                        <td><input type="radio" value="none" name="Informative" /></td>
                        <td><input type="radio" value="none" name="Informative" /></td>
                        <td><input type="radio" value="none" name="Informative" /></td>
                    </tr>
                    <tr>
                        <td className="first-col">Explaining Power</td>
                        <td><input type="radio" value="none" name="Visually" /></td>
                        <td><input type="radio" value="none" name="Visually" /></td>
                        <td><input type="radio" value="none" name="Visually" /></td>
                    </tr>
                </table>
                <div className="btn-block">
                    <button type="submit" href="/">Submit</button>
                </div>
            </form>
        </div>
    )
}
