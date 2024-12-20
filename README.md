# ao-sdk

An SDK for developing and creating AO services

# AO Protocol SDK - API Overview

This document outlines the APIs for an SDK that enables the development of
services and processes in line with **The AO Protocol: A Decentralized
Open-Access Supercomputer**. The AO computer provides a unified, decentralized
computing environment capable of supporting parallel processes. These APIs
expose core functionalities necessary for interacting with the AO network and
building services that can leverage its actor-oriented, message-passing, and
decentralized computing architecture.

<!-- toc -->

- [Table of Contents](#table-of-contents)
- [Processes](#processes)
  - [Create a Process](#create-a-process)
  - [Get Process State](#get-process-state)
  - [Terminate Process](#terminate-process)
- [Messages](#messages)
  - [Send a Message](#send-a-message)
  - [Get Message Status](#get-message-status)
- [Scheduler Units (SUs)](#scheduler-units-sus)
  - [Submit Data to Scheduler](#submit-data-to-scheduler)
  - [Get Process Messages](#get-process-messages)
  - [Get Process Message](#get-process-message)
- [Compute Units (CUs)](#compute-units-cus)
  - [Request Process Execution](#request-process-execution)
  - [Get Process Output](#get-process-output)
- [Messenger Units (MUs)](#messenger-units-mus)
  - [Relay a Message](#relay-a-message)
  - [Monitor a Process](#monitor-a-process)
  - [Stop Monitoring a Process](#stop-monitoring-a-process)
- [Cron Services](#cron-services)
  - [Get Cron Outbox](#get-cron-outbox)
  - [Evaluate Cron Job](#evaluate-cron-job)

<!-- tocstop -->

## Table of Contents

- [Processes](#processes)
- [Messages](#messages)
- [Scheduler Units (SUs)](#scheduler-units-sus)
- [Compute Units (CUs)](#compute-units-cus)
- [Messenger Units (MUs)](#messenger-units-mus)
- [Cron Services](#cron-services)

---

## Processes

### Create a Process

Creates a new process on the AO network by specifying the required virtual
machine, scheduling method, and other initialization parameters.

**Endpoint:**  
`POST /process`

**Request Body:**

- `module`: The WebAssembly or Lua module defining the process code.
- `scheduler`: The scheduler unit that will manage the process.
- `memory_limit`: Maximum memory allocation for the process.
- `compute_limit`: Maximum compute cycles for the process.
- `cron_interval`: Optional. Sets up a recurring cron job for the process.

**Response:**

- `process_id`: Unique identifier for the created process.

---

### Get Process State

Fetches the current memory state of a process.

**Endpoint:**  
`GET /process/{process_id}`

**Query Params:**

- `to`: Optional. Timestamp to evaluate up to (inclusive).

**Response:**

- Binary data representing the current memory state of the process.

---

### Terminate Process

Terminates a running process.

**Endpoint:**  
`DELETE /process/{process_id}`

**Response:**

- `200 OK` if successfully terminated.

---

## Messages

### Send a Message

Sends a message to a process. Messages are how processes communicate and trigger
actions in the AO network.

**Endpoint:**  
`POST /message`

**Request Body:**

- `to`: Process ID to send the message to.
- `data`: Message payload.
- `from_process`: Optional. If sending from another process.
- `read_only`: Optional. Whether the message only reads state.

**Response:**

- `message_id`: Unique identifier of the message sent.

---

### Get Message Status

Fetches the status and result of a previously sent message.

**Endpoint:**  
`GET /message/{message_id}`

**Response:**

- `status`: The status of the message (e.g., pending, processed).
- `result`: The result if the message was processed.

---

## Scheduler Units (SUs)

### Submit Data to Scheduler

Submits a new message or process to be scheduled by the Scheduler Unit.

**Endpoint:**  
`POST /scheduler`

**Request Body:**

- Binary ANS-104 data item for a message or process.

**Response:**

- `id`: Transaction ID of the data item.

---

### Get Process Messages

Retrieves all messages for a given process managed by a Scheduler Unit.

**Endpoint:**  
`GET /scheduler/{process_id}`

**Query Params:**

- `from`: Optional. Fetch messages from this timestamp.
- `to`: Optional. Fetch messages up to this timestamp.

**Response:**

- Array of messages associated with the process.

---

### Get Process Message

This endpoint is usually requested by the Compute Unit (cu), and the response is
a single JSON message representing a single message in ao.

**Endpoint:**  
`GET /scheduler/{message_id}?process-id={process_id}`

**Params:**

- `message-id`: the message to fetch

**Query Params:**

- `process-id`: the process id the message belongs to.

**Response:**

- The message DataItem

---

## Compute Units (CUs)

### Request Process Execution

Requests the Compute Unit to execute a message for a process and return the
result.

**Endpoint:**  
`POST /compute/{process_id}/message/{message_id}`

**Response:**

- `result`: The output of the computation, including any new messages or process
  spawns.

---

### Get Process Output

Fetches the output of a previously executed message.

**Endpoint:**  
`GET /compute/{process_id}/message/{message_id}`

**Response:**

- `output`: The output of the message processing.
- `spawns`: Any new processes spawned as a result.

---

## Messenger Units (MUs)

### Relay a Message

Relays a message from one process to another via the Messenger Unit.

**Endpoint:**  
`POST /messenger`

**Request Body:**

- `message_id`: The message to relay.
- `target_process`: The target process to send the message to.

**Response:**

- `status`: Confirmation of successful relay.

---

### Monitor a Process

Starts monitoring a process for any new scheduled messages or cron jobs,
cranking them as needed.

**Endpoint:**  
`POST /messenger/monitor/{process_id}`

**Response:**

- `status`: Monitoring started for the process.

---

### Stop Monitoring a Process

Stops monitoring a process for scheduled messages.

**Endpoint:**  
`DELETE /messenger/monitor/{process_id}`

**Response:**

- `status`: Monitoring stopped for the process.

---

## Cron Services

### Get Cron Outbox

Retrieves any messages generated by cron jobs for a process within a specific
time range.

**Endpoint:**  
`GET /cron/{process_id}`

**Query Params:**

- `from`: Fetch cron messages after this timestamp.
- `to`: Fetch cron messages before this timestamp.

**Response:**

- Array of cron messages generated during the time range.

---

### Evaluate Cron Job

Manually trigger the execution of a cron job for a process.

**Endpoint:**  
`POST /cron/{process_id}`

**Response:**

- `result`: Output of the cron job execution, including any messages or spawns.
