"use client"
import { Header } from "@/components/Header";
import { CountProvider} from "@/context/CountContext";


// EXEMPLO COM O PROVIDER NO CODIGO
/*export default function page () {
    // Faremos aqui como faz uma alteração de um context, pra isso precisamos "passar uma state" pra a prop "value" do context seja seja capaz de ser alterada (alterando essa state) 
    const [onlineCount, setOnlineCount] = useState(92)

    return (
        <div className="container mx-auto">
            <CountContext.Provider value={{ onlineCount, setOnlineCount }}> {/*o (value terá o valor padrão do valor passado para os children do provider. Agora tudo que esta dentro do provider terá acesso ao (value)  }
            <Header/>
            </CountContext.Provider>
        </div>
    )
}*/

export default function page () {

    return (
        <div className="container mx-auto">
            <CountProvider> {/*Apenas importando o componente do provider que ja tem o provider, essa é a forma mais correta de fazer*/}
            <Header/>
            </CountProvider>
        </div>
    )
}