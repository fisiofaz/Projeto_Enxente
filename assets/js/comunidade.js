
        let currentSlide = 0;
    
        function showSlide(index) {
            const slides = document.querySelectorAll('.carousel-image');
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
    
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === currentSlide) {
                    slide.classList.add('active');
                }
            });
        }
    
        function changeSlide(direction) {
            showSlide(currentSlide + direction);
        }
    
        // Inicializa o carrossel mostrando a primeira imagem
        showSlide(currentSlide);
        function toggleAnswer(answerId) {
            const answer = document.getElementById(answerId);
            if (answer.style.display === "none") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        }
     
    function registerVolunteer(event) {
        event.preventDefault(); // Impede o envio do formulário

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        // Aqui você pode adicionar a lógica para processar os dados do formulário
        console.log("Nome Completo:", fullName);
        console.log("E-mail:", email);
        console.log("Telefone:", phone);
        console.log("Endereço:", address);

        // Exemplo de mensagem de sucesso
        alert("Cadastro realizado com sucesso!");
        
        // Limpar o formulário após o envio
        document.getElementById('volunteerForm').reset();
    }



    