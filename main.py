import os
import magic
import boto3

session = boto3.session.Session()

access_key = ''
secret_key = ''

space_name = 'static'

client = session.client('s3',
                        region_name='nyc3',
                        endpoint_url='https://myc.nyc3.digitaloceanspaces.com/',
                        aws_access_key_id=access_key,
                        aws_secret_access_key=secret_key)

def upload_files():
    for path, subdirs, files in os.walk("./staticfiles/css/"):
        for name in files:
            p = os.path.join(path, name)
            print(p)
            mime = magic.Magic(mime=True)
            ctype = mime.from_file(p)
            if ".js" in name:
                ctype = "text/javascript"
            if ".css" in name:
                ctype = "text/css"
            client.upload_file(p, 'static', p.replace('./staticfiles/', ''), ExtraArgs={'ContentType':  ctype, 'ACL': "public-read"})




def get_objects():
    response = client.list_objects(Bucket='static')
    print(response)


get_object = upload_files()
print('Done')
