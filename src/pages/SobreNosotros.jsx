import { Box, Text } from "@chakra-ui/react";
export function SobreNosotros(){
    return(
        <Box bg="gray.800" p={6} borderRadius="md" textAlign="justify">
            <Text color="white" fontSize="lg">
                 La aplicación es una lista de tareas en React que permite al usuario agregar, actualizar y eliminar tareas. Al iniciar la aplicación, se muestra un formulario donde el usuario puede ingresar el nombre y la descripción de una nueva tarea. La descripción no es obligatoria, pero el nombre de la tarea debe tener al menos cuatro caracteres para poder ser agregada.
                 La aplicación muestra una lista de todas las tareas agregadas, y cada tarea está representada por un elemento en la lista. El color de cada tarea depende de su estado. Si una tarea no ha sido iniciada, se muestra en rojo. Si el usuario ha iniciado la tarea, se muestra en amarillo. Si la tarea ha sido completada, se muestra en verde. Para cambiar el estado de una tarea, el usuario debe hacer clic en los checkboxes "En curso" o "Terminado" que se encuentran junto a cada tarea.
                 La aplicación también cuenta con dos contadores: uno muestra el número total de tareas, mientras que el otro muestra el número de tareas pendientes, es decir, las tareas que aún no han sido completadas.
                 Cada tarea se puede eliminar haciendo clic en el icono de la papelera que se encuentra junto a ella. La eliminación de una tarea actualiza automáticamente los contadores de tareas.
                 Para el desarrollo de esta aplicación, se han utilizado varios Hooks de React, como useState, useEffect y algunos personalizados. También se ha utilizado React Router para el manejo de rutas en la aplicación. Además, se ha utilizado la función de almacenamiento local (Local Storage) para guardar las tareas en la memoria del dispositivo.
            </Text>
        </Box>
    )
}