package views;

import java.util.concurrent.TimeUnit;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;

/**
 * Gestor centralizado de conexiones HTTP.
 * @author Usuario
 */
public class Connection {

    // 1. Constantes correctas
    public static final MediaType JSON = MediaType.get("application/json; charset=utf-8");
    private static final String BASE_URL = "http://localhost:3000";
    
    // 2. El cliente único (Singleton implícito mediante static)
    private static final OkHttpClient client = new OkHttpClient.Builder()
            .readTimeout(3, TimeUnit.SECONDS)
            .build();

    // 3. Constructor privado para evitar que instancien la clase innecesariamente
    private Connection() {}

    /**
     * Genera un Builder limpio con la URL base ya inyectada.
     * Al no guardarlo en una variable estática, cada hilo/ventana recibe su propia copia aislada.
     */
    public static Request.Builder createBuilder(String endpoint) {
        return new Request.Builder().url("%s%s".formatted(BASE_URL, endpoint));
    }

    /**
     * Proveedor del cliente único para ejecutar las peticiones.
     */
    public static OkHttpClient getClient() {
        return client;
        
    }

    public static MediaType getJSON() {
        return JSON;
    }
}
