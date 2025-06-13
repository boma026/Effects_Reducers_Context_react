"use client"
import { useEffect, useState } from "react";

export default function Page() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState<string>("Boma");

  // Roda em toda renderização do componente (inclusive re-renderizações)
  useEffect(() => {
    alert("Rodando a cada renderização");
  });

  // Roda apenas uma vez, na primeira renderização (montagem do componente)
  // Isso acontece porque o array de dependências está vazio ([]),
  // ou seja, não há nenhuma variável sendo monitorada.
  // Com [] vazio, o React executa o efeito apenas uma vez, 
  // logo após o componente aparecer na tela.
  useEffect(() => {
    alert("Rodando só na primeira renderização");
  }, []);

  // Roda na primeira renderização e sempre que o valor de `name` mudar
  useEffect(() => {
    alert("Rodando ao mudar o nome");
  }, [name]);

  return (
    <>
      <div>Sou {name} e tenho {age} anos</div>
      <button onClick={() => setAge(3)}>Setar idade para 3</button>
      <button onClick={() => setName("Joao")}>Mudar nome para João</button>
    </>
  );
}
