import Iframe from 'react-iframe';

export default function IframePage () {

    const url =  'http://developm.guess.net:8080/profoundui/genie?skin=guess&token=U3Ygbjrz8GOWemu2AJRZhpAIQZh2AIQYu2AVdl6FNiqBJRnv3O&macro=macro1&var1=param1&value1=GUSAU1&var2=param2&value2=3';
    return (
        <Iframe url={url}
                width="100%"
                height="90%"
                id="myId"
                className="myClassname"
                position="absolute"/>
    );
}