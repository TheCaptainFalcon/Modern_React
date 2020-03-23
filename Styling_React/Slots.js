class Slots extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const win = (s1 === s2) && (s2 === s3);
        const colors = { fontSize: '50px', backgroundColor: 'purple'};
        return(
            <div className='Slots'>
                <p style={colors}>
                    {s1} {s2} {s3}
                </p>
                <p className = { win ? 'winner' : 'loser' }>
                {win ? 'You Win!' : 'You Lose!'}</p>
            </div>
           
        );
    }
}