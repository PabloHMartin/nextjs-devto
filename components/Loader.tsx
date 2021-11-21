export default function Loader({ show }): JSX.Element {
    return show ? <div className="loader"></div> : null;
}