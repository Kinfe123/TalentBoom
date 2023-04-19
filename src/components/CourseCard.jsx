import './CourseCard.css'

function CourseCard({image, title, level, progress, link}){

    function onClicked(){

    }
    
    return (
        <div onClick={onClicked} className='course_card'>
            <div className='course_image'>
                <img src={image} alt={title} />
            </div>
            <div className='course_info'>
                <h3 className='course_title'>{title}</h3>
                <p className='progress_percentage'>
                    {progress == "100" ? "Completed": progress + "%"}
                </p>
                <div className="course_progress_bar">
                    <div 
                        className='course_progress'
                        style={{
                            width: progress +"%",
                            background: progress == "100" ? "rgb(29, 214, 29)": ""
                        }}
                    ></div>
                </div>
                <p className='course_level'>{level}</p>
            </div>

        </div>
    )
}

export default CourseCard;