document.getElementById('imageInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            var urlimage = e.target.result;
            localStorage.setItem('bgimgurlextension', urlimage)
            var resulturlimg = localStorage.getItem('bgimgurlextension');
            document.body.style.backgroundImage = `url('${resulturlimg}')`;
        };

        reader.readAsDataURL(file);
    }
});
