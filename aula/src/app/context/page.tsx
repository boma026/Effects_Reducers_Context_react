//Context é um artificio do react que se usa pra passar informaçoes entre um componente e outro
//Abaixo é como é feito a troca de informação entre componentes sem o uso do context
const Title = ({label}: {label:string}) => {
    return(
        <h1>{label}</h1>
    )
}

const Subtitle = ({label} : {label:string}) => {
    return(
        <h2>{label}</h2>
    )
}

const Header = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <header>
            {/*Passando a informação do header pra o os componentes title e subtitle*/}
            <Title label={title}/> 
            <Subtitle label={subtitle}/>
        </header>
    )
}

export default function Page() {
 //informação a ser passada
    const pageInfo = {
        title: "título da pagina",
        subtitle: "subtitulo da pagina"
    }

    return (
        <div className="container mx-auto">
            <Header title={pageInfo.title} subtitle={pageInfo.subtitle} /> {/*Passar as informações para o componente Header como props, para que ele de segmento para passar pros outros componentes*/}
        </div>
    )
}