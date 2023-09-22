use crate::create_connection::{self, CreateConnection};

#[tauri::command]
pub fn get_tables(conn_str: &str, is_ssl: bool) -> Result<Vec<String>, String> {
    let connection_config = CreateConnection {
        is_ssl,
        conn_str: conn_str.to_string(),
    };

    let result_client = create_connection::create_connection(connection_config);

    if result_client.is_err() {
        let err = result_client.err().unwrap();
        let error_msg = format!("{}", err);
        return Err(error_msg.into());
    }

    let mut client = result_client.unwrap();

    let query_result = client.query(
        "
SELECT tablename FROM pg_tables WHERE schemaname = 'public';
        ",
        &[],
    );

    if query_result.is_err() {
        let err = query_result.err().unwrap();
        let err_msg = format!("{}", err);
        return Err(err_msg);
    }

    let response: Vec<String> = query_result
        .unwrap()
        .into_iter()
        .map(|row| row.get(0))
        .collect();

    Ok(response)
}