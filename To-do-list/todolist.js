let input = document.getElementById('input');
        let list = document.getElementById('list');
        let errorText = document.getElementById('errorText');
        let i = 1;

        function filterText(text) {
            if(text) {
                if(text.length >= 3) {
                    return text;
                }else{
                    errorText.innerHTML = 'Required at least three character';
                    return false;
                }
            }
            errorText.innerHTML = 'Input can`t be Empty';
            return false;
        }

        function showList(input) {
            
            list.innerHTML += `<li class="list-item" id='list${i}'>
                                    <div id="list-item-wrapper">
                                        <div id="listText">
                                            <span id="listText${i}">${input}</span>
                                        </div>
                                    
                                        <div id="actionBtn">
                                            <i class="fas fa-edit text-warning" onclick="editList(${i})"></i>
                                            <i class="fas fa-trash text-danger" onclick="deleteList(${i})"></i> 
                                        </div>
                                    </div>
                                    
                                </li>
                `;
            i++;
        }

        function editList(listId) {
            let currentText = document.getElementById(`listText${listId}`);

            let editPrompt = prompt('Editing',currentText.innerHTML);

            if(editPrompt) {
                currentText.innerHTML = editPrompt;
            }else{
                errorText.innerHTML = 'Canceled Edit';
            }
        }

        function deleteList(listId) {
            
            let currentText = document.getElementById(`listText${listId}`).innerHTML;

            let deleteConfirm = confirm(`'${currentText}' will be Deleted. Do you still want to continue?`);

            if (deleteConfirm) {
                let deleteList = document.getElementById('list'+listId);
                
                list.removeChild(deleteList);
                errorText.innerHTML = 'Deleted';
            }else{
                errorText.innerHTML = 'Canceled Deletion';
            }
        }

        function addList() {
            let inputText = input.value;
            
            if(filterText(inputText)){
                showList(filterText(inputText));
                
                input.value = '';
                errorText.innerHTML = '';
            }
        }