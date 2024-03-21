const PublishButton = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.isPublished ? 'Unpublish' : 'Publish'}
        </button>
    );
}

export default PublishButton;