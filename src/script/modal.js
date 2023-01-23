 function OpenModal1() {
            var modal = document.getElementById('modal');
            modal.classList.toggle('ActiveModal');
			
			document.getElementById('mimg').src="../../../assets/images/ilustra-poupando.png"
			document.getElementById('mh3').textContent="Investimento iniciantes"
			document.getElementById('mp').textContent="Descubra tudo o que você precisa para entrar no mundo dos investimentos e ser bem sucedido financeiramente."
			document.getElementById('ml1').textContent="1 - Aula introdutória"
			document.getElementById('ml2').textContent="2 - História sobre investimento"
			document.getElementById('ml3').textContent="3 - Por onde começar"
			document.getElementById('mprof').textContent="Professor: Jane Doe"
			document.getElementById('link').href="../course/index.html"
			
			
           
        }
 function OpenModal2() {
            var modal = document.getElementById('modal');
            modal.classList.toggle('ActiveModal');
			
			document.getElementById('mimg').src="../../../assets/images/ilustra-investimento.png"
			document.getElementById('mh3').textContent="Poupando e Rendendo"
			document.getElementById('mp').textContent="Aprenda os fundamentos essênciais para poupar e ver seu dinheiro render de forma segura."
			document.getElementById('ml1').textContent="1 - Aula introdutória"
			document.getElementById('ml2').textContent="2 - História sobre a poupança"
			document.getElementById('ml3').textContent="3 - Passo a passo"
			document.getElementById('mprof').textContent="Professor: Jack Richman"
			document.getElementById('link').href="../course/index.html"

           
        }
		
function OpenModal3() {
            var modal = document.getElementById('modal');
            modal.classList.toggle('ActiveModal');
			
			document.getElementById('mimg').src="../../../assets/images/ilustra-independencia.png"
			document.getElementById('mh3').textContent="Independência Financeira"
			document.getElementById('mp').textContent="Saiba como conquistar a tão sonhada independência financeira de forma simples e objetiva."
			document.getElementById('ml1').textContent="1 - Aula introdutória"
			document.getElementById('ml2').textContent="2 - Dicas de saúde financeira"
			document.getElementById('ml3').textContent="3 - Conquistando a Independência Finânceira"
			document.getElementById('mprof').textContent="Professor: Ernest G. Chad"
			document.getElementById('link').href="../course/index.html"
        }
		
function CloseModal() {
            var exit = document.getElementById('modal');
            exit.classList.toggle('ActiveModal');
           
        }