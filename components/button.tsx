interface MyButtonProps {
    text:any;
    url:any;
    css:any;
}

export default function Button({text, css, url}: MyButtonProps) {
    return (
        <a className={css} href={url}>{text}</a>
    )
}