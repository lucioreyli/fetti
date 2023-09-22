use crate::create_connection::create_connection;

#[tauri::command]
pub fn test_connection(name: &str) -> Result<bool, Box<dyn std::error::Error>> {
    let origin = create_connection(name, false);
    println!("origin - {:?}", origin);
    origin
}
