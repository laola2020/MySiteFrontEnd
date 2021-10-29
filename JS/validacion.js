
<script>
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>

/*
        <form action="https://www.w3schools.com/action_page.php" method="POST" target="__blanck">
            <fieldset>
                <legend>CONTACTO</legend><br>
                <label for="nombreyapellido">Nombre y Apellido(*obligatorio):</label><br>
                <input type="text" id="nombreyapellidoID" name="nombreyapellido" required><br><br>
                <label for="email">Correo electrónico (*obligatorio):</label><br>
                <input type="email" id="emailID" name="email" required><br><br>
                <label for="comentarios">Comentarios</label><br>
                <textarea cols="80" rows="20" name="comentarios"></textarea>\ <br><br>
                <input type="submit" value="ENVIAR">
            </fieldset>
        </form> */
       
