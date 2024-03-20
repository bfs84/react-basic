const Title = (props) => {
    const titleStyle = {
        textAlign: 'center',
        fontFamily: 'cursive',
    };

    return (
        <h1 style={titleStyle}>{props.title}</h1>
    );
};

export default Title;