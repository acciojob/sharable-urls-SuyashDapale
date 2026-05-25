const button = document.getElementById("button");

        button.addEventListener("click", function () {

            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            let url = "https://localhost:8080/";

            let params = [];

            if (name) {
                params.push(`name=${name}`);
            }

            if (year) {
                params.push(`year=${year}`);
            }

            if (params.length > 0) {
                url += "?" + params.join("&");
            }

            document.getElementById("url").innerText = url;
        });