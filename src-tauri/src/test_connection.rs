use tauri;

#[tauri::command]
pub fn enter_session(name: &str) -> String {
    format!("logged as {}!", name)
}
