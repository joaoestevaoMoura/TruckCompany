import "./Footer.css";


const Footer = () => {


return (

<footer className="footer">


<div className="footer-container">



{/* COLUNA LOGO */}

<div className="footer-brand">


<h2>
<span>frete</span>bras
</h2>


<small>
Por Frete.com
</small>



<p>
Atendimento à imprensa:
news@frete.com
</p>


<p>
CNPJ nº 10.885.840/0001-32
</p>


<p>
Av. Dr. Chucri Zaidan, 1240
<br/>
São Paulo - SP
</p>




<div className="social">


<a>●</a>
<a>♥</a>
<a>▶</a>
<a>◎</a>


</div>



</div>






{/* COLUNA 1 */}

<div className="footer-column">


<h3>
A Fretebras
</h3>


<a>
Institucional
</a>

<a>
Quem somos
</a>

<a>
Clientes
</a>

<a>
Blog
</a>

<a>
Contato
</a>

<a>
Conheça nossas vagas
</a>

<a>
Termos de uso
</a>

<a>
Política de privacidade
</a>


</div>





{/* COLUNA 2 */}

<div className="footer-column">


<h3>
Serviços
</h3>


<a>
Empresas
</a>


<a>
Fretes
</a>


<a>
Veículos
</a>



</div>







{/* COLUNA 3 */}

<div className="footer-column">


<h3>
Central do Assinante
</h3>


<a>
Acessar
</a>


<a>
Cadastre-se
</a>


<a>
Meus fretes
</a>


<a>
Cadastrar frete
</a>


<a>
Pagamento
</a>


</div>





</div>



</footer>

)


}


export default Footer;