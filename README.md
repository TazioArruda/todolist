# TO-DO 

## ENTITIES

    User{
        fullname   String
        email      String Unique
        password   String
    }

    List {


        title           string
        description     string 
        photo           string
        banner_img      string
        items_completed Number 
        user            User
    }

    Item {
        title   string 
        status string "pading" | "done"
    }


## UseCases 

    -- Criar usuário
    -- Logar com o usuário 
    
    -- Criar Lista personalizaa de tarefas 
    -- Excluir uma Lista 
    
    -- Criar tarefas em uma lista 
    -- Completar uma tarefa 
    -- Editar o title de uma tarefa
    -- Excluir uma tarefa 