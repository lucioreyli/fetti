use crate::create_connection::{self, CreateConnection};

#[tauri::command]
pub fn test_connection(conn_str: &str, is_ssl: bool) -> Result<bool, String> {
    let connection_config = CreateConnection {
        conn_str: conn_str.to_string(),
        is_ssl,
    };
    let result_client = create_connection::create_connection(connection_config);

    if result_client.is_err() {
        let err = result_client.err().unwrap();
        let error_msg = format!("{}", err);
        return Err(error_msg.into());
    }

    Ok(true)
}
