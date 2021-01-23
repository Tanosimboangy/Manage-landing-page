import React from 'react'

export default function Second_section() {
    return (
        <section className="second_section">
            <div className="container">
                <h2>What they've said</h2>
                <div className="articles">
                    <article>
                        {/* img */}
                        <h4>Anisha Li</h4>
                        <p>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all time keeps everyone motivated."</p>
                    </article>
                    <article>
                        {/* img */}
                        <h4>Ali Bravo</h4>
                        <p>"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."</p>
                    </article>
                    <article>
                        {/* img */}
                        <h4>Richard Watts</h4>
                        <p>"Manage allows us to provides structure and process. It keeps us orgaized and focused. I can't stop recommending them to everyone I talk to!"</p>
                    </article>
                    <article>
                        {/* img */}
                        <h4>Shanai Gough</h4>
                        <p>"Their software allows us to track, manage and collaborate on our project from anywhere. It keeps the whole team insync withoout being intrusive."</p>
                    </article>
                </div>
                <button type="button" className="get_started">Get Started</button>
            </div>
        </section>
    )
}
