
# DigitalOcean S3 Python Uploader Script

This script is designed to upload files from a local directory to a DigitalOcean Space using the Boto3 library. It is configured to handle specific MIME types for `.js` and `.css` files and ensure the uploaded files are publicly accessible.

## Prerequisites

1. **Python 3.x** installed on your machine.
2. **pip** (Python package installer).
3. DigitalOcean Space credentials (Access Key and Secret Key).
4. The following Python packages:
   - boto3
   - python-magic

## Installation

1. Clone the repository to your local machine:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the required packages:
    ```sh
    pip install boto3 python-magic
    ```

## Configuration

1. Replace the placeholders in the script with your actual DigitalOcean Space credentials and endpoint URL.

    ```python
    access_key = 'your_access_key'
    secret_key = 'your_secret_key'
    ```

2. Update the `endpoint_url` to match your DigitalOcean Space configuration:
    ```python
    endpoint_url='https://your_bucket.nyc3.digitaloceanspaces.com/'
    ```

## Usage

1. Place the files you want to upload in the `./staticfiles/front/video/` directory.

2. Run the script:

    ```sh
    python upload_script.py
    ```

    The script will walk through the specified directory, determine the MIME type of each file, and upload it to the DigitalOcean Space. Files with `.js` and `.css` extensions will have their MIME types explicitly set to `text/javascript` and `text/css`, respectively.

## Functions

### `upload_files()`

- Walks through the directory `./staticfiles/front/video/`.
- Determines the MIME type of each file.
- Uploads the file to the DigitalOcean Space under the `static` bucket, replacing the `./staticfiles/` part of the path.
- Sets the files to be publicly readable.

### `get_objects()`

- Lists the objects in the `static` bucket.
- Prints the response from the DigitalOcean Space.


## Example

Here is an example directory structure and how the files will be uploaded:

Local directory structure:

./staticfiles/front/video/
├── example.js
├── example.css
└── example.txt


After running the script, the files will be uploaded to:

static/front/video/example.js
static/front/video/example.css
static/front/video/example.txt

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you have suggestions for improving this script, feel free to submit a pull request or open an issue.

