use crate::create_connection::create_connection;

#[tauri::command]
pub fn test_connection(name: &str) -> String {
    let origin = create_connection(name);
    println!("{}", origin);
    let res = format!("logged as {}!", name);
    return res;
}
