use openssl::ssl::{SslConnector, SslMethod};
use postgres::{Client, NoTls};
use postgres_openssl::MakeTlsConnector;

pub fn create_connection(con_str: &str, ssl: bool) -> Result<bool, Box<dyn std::error::Error>> {
    let mut client = if ssl {
        let builder = SslConnector::builder(SslMethod::tls())?;
        let connector = MakeTlsConnector::new(builder.build());
        Client::connect(con_str, connector)?
    } else {
        Client::connect(con_str, NoTls)?
    };

    // TODO: Replace to client.batch_execute
    let res = client.query("SELECT 1 as NO_POLE", &[])?;
    let _ = client.close();

    println!("{:?}", res);

    Ok(client)
}
