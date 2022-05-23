import React from 'react'

function Rating({ value, text, color }) {


    function drawStars() {
        let fullStars = Array(5).fill(<i className="fa-solid fa-star" ></i>)

        fullStars.map((star, index) => {
            let current = index + 1
            if (current - value > 0 && current - value < 1) {
                fullStars[index] = <i class="fa-regular fa-star-half-stroke"></i>
            }
            else if (current - value < 0) {
                fullStars[index] = <i className="fa-solid fa-star" ></i>
            }
            else if (current - value >= 1) {
                fullStars[index] = <i class="fa-regular fa-star"></i>
            }
        })

        return fullStars
    }





    return (
        <div style={{ color: color }}>{drawStars()} </div>
    )
}

export default Rating