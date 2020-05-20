getData();
        async function getData(){
            const response = await fetch('/api');
            const data = await response.json();

            for(item of data){
                const root = document.createElement('div');
                
                
                const image = document.createElement('img');
                
                image.src = item.image64;
                image.alt = 'Your selfies';
                image.style.width
                const mood = document.createElement('h5');
                
                mood.textContent = `mood: ${item.mood}`;
                const geo = document.createElement('p');
                
                geo.textContent = `${item.lat}, ${item.lon}`;
                const date = document.createElement('p');
                
                const dateString = new Date(item.timestamp).toLocaleString();
                date.textContent =dateString;
                
                root.append(mood,geo,date,image);
                document.body.append(root);

                

            }
            console.log(data);
            
        fetch('/api')}