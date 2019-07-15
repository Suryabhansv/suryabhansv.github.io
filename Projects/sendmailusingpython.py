import smtplib
from email.mime.text import MIMEText

smtp_ssl_host = 'smtp.gmail.com' 
smtp_ssl_port = 465

username = 'suryabhancba'
password = 'xxxxxxxxxxxxx'

sender = 'suryabhancba'

#targets = ['suryabhansv@gmail.com']

targets = input("Enter Mail id - ")
subject = input("Enter Subject - ")


msg = MIMEText('Hi, - by Suryabhan')

#text = raw_input('Enter the text - ')
#part1 = MIMEText(text, 'plain')


msg['Subject'] = subject
msg['From'] = sender
msg['To'] = targets
#msg['To'] = ','.join(targets)



server = smtplib.SMTP_SSL(smtp_ssl_host, smtp_ssl_port)
server.login(username, password)
server.sendmail(sender, targets, msg.as_string())
server.quit()
