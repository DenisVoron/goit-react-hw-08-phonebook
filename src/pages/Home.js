const styles = {
    container: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
    span: {
        display: 'block',
        marginTop: '200px',
        marginBottom: '50px',
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    }
};


export default function Home() {
    return (
        <div style={styles.container}>
            <span style={styles.span}>
                Welcome!
            </span>
            <h1 style={styles.title}>
                Your contact book
            </h1>
        </div>
    );
}